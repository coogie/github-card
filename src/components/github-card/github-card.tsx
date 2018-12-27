import { Component, Prop, State } from "@stencil/core";
import Profile, { IProfile } from "../../utils/Profile.model";

@Component({
  tag: "github-card",
  styleUrl: "github-card.css",
  shadow: true
})
export class GithubCard {
  @Prop() user: string;

  @State() userData: IProfile;

  componentWillLoad = () => {
    return fetch(`https://api.github.com/users/${this.user}`)
      .then(res => res.json())
      .then(data => {
        this.userData = Profile(data);
      });
  };

  render() {
    return (
      <article class="GithubCard">
        <header class="GithubCard__header">
          <div class="GithubCard__avatar">
            <img src={this.userData.avatar_url} />
          </div>
          <h1 class="GithubCard__name">
            <a class="GithubCard__link" href={this.userData.html_url}>
              {this.userData.name}{" "}
              <small class="GithubCard__username">@{this.userData.login}</small>
            </a>
          </h1>
        </header>
        <div class="GithubCard__content">
          <ul class="GithubCard__data">
            <li class="GithubCard__data-item">
              <span class="GithubCard__data-item-count">
                {this.userData.public_repos}
              </span>
              <span class="GithubCard__data-item-title">Repos</span>
            </li>
            <li class="GithubCard__data-item">
              <span class="GithubCard__data-item-count">
                {this.userData.public_gists}
              </span>
              <span class="GithubCard__data-item-title">Gists</span>
            </li>
            <li class="GithubCard__data-item">
              <span class="GithubCard__data-item-count">
                {this.userData.followers}
              </span>
              <span class="GithubCard__data-item-title">Followers</span>
            </li>
          </ul>
          <div class="GithubCard__member-since">
            Member since {this.userData.created_at}
          </div>
        </div>
      </article>
    );
  }
}
