export interface IProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
}

export default function Profile(data: IProfile) {
  return {
    login: data.login,
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    name: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    bio: data.bio,
    public_repos: data.public_repos,
    public_gists: data.public_gists,
    followers: data.followers,
    following: data.following,
    created_at: data.created_at
  };
}
