"use client"
import Link from "next/link";
import { useState } from "react";

function CommentSection() {
  // State to hold the list of comments
  const [comments, setComments] = useState<string[]>([]);
  
  // State to hold the value of the new comment input
  const [newComment, setNewComment] = useState<string>("");

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>
      
      {/* Comments List */}
      <div className="mb-4">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="bg-amber-100 p-2 mb-2 rounded-lg">
              <p>{comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Write your comment..."
          className="p-2 border border-gray-300 rounded-lg mb-4"
        />
        <button type="submit" className="bg-amber-500 text-white p-2 rounded-lg">
          Add Comment
        </button>
      </form>
      <h3 className="text-2xl">Go back to <Link href="/blog" className="bg-amber-100">Blog</Link></h3>
    </div>
  );
}

export default CommentSection;
