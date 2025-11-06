import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/hooks';

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
    }
    fetchBlogs();
  }, [user, navigate]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const blogsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];
    setBlogs(blogsList);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !image) return;

    setLoading(true);
    try {
      // Upload image
      const timestamp = Date.now();
      const fileName = image.name.toLowerCase().replace(/[^a-z0-9.]/g, '-');
      const storageRef = ref(storage, `blog-images/${timestamp}-${fileName}`);
      
      // Set proper metadata
      const metadata = {
        contentType: image.type,
        customMetadata: {
          'timestamp': timestamp.toString(),
        }
      };

      // Create a blob from the file and upload
      const blob = new Blob([await image.arrayBuffer()], { type: image.type });
      
      // Update metadata to include security headers
      const updatedMetadata = {
        ...metadata,
        customMetadata: {
          ...metadata.customMetadata,
          'referrerPolicy': 'no-referrer',
          'crossOrigin': 'anonymous'
        }
      };

      // Create a fetch request to upload the file
      await uploadBytes(storageRef, blob, updatedMetadata);
      
      // Get the download URL with custom headers
      const imageUrl = await getDownloadURL(storageRef);
      
      // Validate the URL is accessible
      try {
        const checkResponse = await fetch(imageUrl, {
          method: 'HEAD',
          mode: 'cors',
          referrerPolicy: 'no-referrer',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        });
        
        if (!checkResponse.ok) {
          throw new Error('Image URL validation failed');
        }
      } catch (validateError) {
        console.error('Image validation error:', validateError);
      }
      
      // Clean up
      URL.revokeObjectURL(URL.createObjectURL(blob));

      // Add blog post
      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        image: imageUrl,
        date: new Date().toISOString(),
      });

      // Reset form
      setTitle('');
      setContent('');
      setImage(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('Failed to upload image or create blog post. Please try again.');
    }
    setLoading(false);
  };

  const handleDelete = async (blogId: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await deleteDoc(doc(db, 'blogs', blogId));
      fetchBlogs();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 block w-full"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? 'Publishing...' : 'Publish Blog Post'}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Existing Blog Posts</h2>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="border-b pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{blog.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;