import React from "react";

const commentsData = [
  {
    name: "Durga Prasad Konatam",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rohit Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "MS Dhoni",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Sachin Tendulkar",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Rahul Dravid",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Sourav Ganguly",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Yuvraj Singh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Anil Kumble",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Hardik Pandya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "KL Rahul",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shikhar Dhawan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rishabh Pant",
    text: "Lorem ipsum dolo",
    // replies missing → handled in code
  },
];

// Single comment component
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Recursive list component
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* Render replies if available */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border-l border-gray-300 ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

// Main container
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[950px]">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
