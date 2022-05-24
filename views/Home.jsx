const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ posts }) {
  return (
    <Layout>
      <header>
        <h1>Hacker News</h1>
        <p>
          <a href="#posts">new</a>
          <a href="#">comments</a>
          <a href="#">popular</a>
          <a href="#">login</a>
        </p>
      </header>

      <div className="post-container">
        {posts.map((post) => (
          <article id={post.id} key={post.id}>
            <form method="post" action={`/posts/${post.id}/vote`} className="inline">
              <button type="submit" name="submit_param" value="submit_value" className="fa fa-sort-desc vote-button upvote-button" />
            </form>
            <h2><a href={`/posts/${post.id}`}>{post.title}</a></h2>
            <p>
              <span className="points">{post.votes}</span>
              <span className="username">{post.username}</span>
              <span className="comment-count">{post.commentCount}</span>
              <a className="delete" href={`/posts/${post.id}`} />
            </p>
          </article>
        ))}
      </div>

      <form id="posts" method="post" action="/posts">
        <input type="text" name="title" placeholder="title" />
        <input type="submit" value="submit new post" />
      </form>
    </Layout>
  );
};
