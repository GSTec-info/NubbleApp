export interface Post {
  id: string;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export type PostAPI = {
  id: number; // 5,
  text: string; // "Explorando os restaurantes de Melbourne",
  user_id: number; // 5,
  image_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post5.jpg",
  is_fixed: boolean; // false,
  is_activated: true;
  created_at: string; // "2026-07-22T00:14:21.673+00:00",
  updated_at: string; // "2026-07-22T00:14:21.673+00:00",
  reactions: [
    {
      emoji_type: string; // "like",
      post_id: number; // 5,
      meta: object; // {}
    },
    {
      emoji_type: string; // "favorite",
      post_id: number; // 5,
      meta: object; // {}
    },
  ];
  user: {
    id: number; //5,
    first_name: string; // "Vanessa",
    last_name: string; // "Isidório",
    username: string; // "vanessa_isidorio",
    email: string; // "vanessa123@coffstack.com",
    profile_url: string; // "https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/9-vanessa.png",
    is_online: boolean; // false,
    full_name: string; // "Vanessa Isidório",
    meta: {
      following_count: string; // "0",
      followers_count: string; // "0"
    };
  };
  status: string; // "published",
  meta: {
    like_count: string; // "6",
    favorite_count: string; // "2",
    comments_count: string; // "3"
  };
};
