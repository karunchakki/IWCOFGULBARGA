import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS_DATA } from '../constants';

const BlogPostDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = BLOG_POSTS_DATA.find(p => p.id === parseInt(id || ''));

    if (!post) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-2xl font-bold text-iwc-blue">Post not found</h1>
                <Link to="/" className="mt-4 inline-block text-iwc-gold hover:text-yellow-300">
                    &larr; Back to Home
                </Link>
            </div>
        );
    }

    const postUrl = window.location.href;
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(post.title);
    const encodedExcerpt = encodeURIComponent(post.excerpt);

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedExcerpt}`;


    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <Link to="/#blog" className="text-sm font-semibold text-iwc-blue hover:text-blue-900">
                      &larr; Back to Blog
                    </Link>
                    <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl">{post.title}</h1>
                    
                    <div className="mt-8 flex items-center">
                        <div className="flex-shrink-0">
                            <span className="sr-only">{post.author}</span>
                            <div className="h-12 w-12 rounded-full bg-iwc-blue flex items-center justify-center text-white font-bold text-lg">{post.author.charAt(0)}</div>
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">
                                Published on <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                            </p>
                        </div>
                    </div>

                    <img src={post.imageUrl} alt={post.title} className="mt-8 w-full rounded-lg shadow-lg object-cover h-96" />
                    
                    <div className="mt-8 prose lg:prose-lg max-w-none text-gray-700">
                       <p>{post.content}</p>
                    </div>

                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-semibold text-gray-900">Share this post</h3>
                        <div className="mt-4 flex items-center space-x-4">
                            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" title="Share on Facebook" className="text-gray-500 hover:text-[#1877F2] transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" title="Share on Twitter" className="text-gray-500 hover:text-[#1DA1F2] transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn" className="text-gray-500 hover:text-[#0A66C2] transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostDetailPage;