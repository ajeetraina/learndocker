import { useEffect } from 'react';
import Layout from '../components/Layout';
import { trackPageView } from '../lib/analytics';
import { FiExternalLink, FiGithub, FiBookOpen, FiYoutube } from 'react-icons/fi';

export default function ResourcesPage() {
  useEffect(() => {
    trackPageView('resources');
  }, []);
  
  return (
    <Layout title="Resources - Learn Docker">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Additional Resources</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FiBookOpen className="mr-2" /> Official Documentation
            </h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://docs.docker.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Documentation <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Comprehensive official documentation</p>
              </li>
              <li>
                <a 
                  href="https://docs.docker.com/compose/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Compose Documentation <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Learn about multi-container applications</p>
              </li>
              <li>
                <a 
                  href="https://docs.docker.com/engine/reference/builder/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Dockerfile Reference <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Complete reference for Dockerfile syntax</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FiGithub className="mr-2" /> GitHub Repositories
            </h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/ajeetraina/dockerlabs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Dockerlabs <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">The original Dockerlabs repository with 500+ Docker tutorials</p>
              </li>
              <li>
                <a 
                  href="https://github.com/docker/awesome-compose" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Awesome Compose <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Sample Docker Compose applications</p>
              </li>
              <li>
                <a 
                  href="https://github.com/collabnix/docker-community-extensions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Community Extensions <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Extensions for Docker Desktop</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FiYoutube className="mr-2" /> Video Tutorials
            </h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.youtube.com/watch?v=zJ6WbK9zFpI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker for Beginners <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Full Docker course for beginners</p>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/watch?v=kTp5xUtcalw" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Compose Tutorial <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Learn Docker Compose from scratch</p>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/watch?v=Qw9zlE3t8Ko" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Security Best Practices <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Learn to secure your Docker containers</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FiBookOpen className="mr-2" /> Community Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.docker.com/community/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Community <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Join the Docker community</p>
              </li>
              <li>
                <a 
                  href="https://collabnix.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Collabnix Community <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">A community for Docker, Kubernetes, and Cloud Native technologies</p>
              </li>
              <li>
                <a 
                  href="https://www.reddit.com/r/docker/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Docker Subreddit <FiExternalLink className="ml-1" />
                </a>
                <p className="text-sm text-gray-600 mt-1">Active Docker community on Reddit</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
