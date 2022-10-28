import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItems from '@theme/BlogPostItems';
import HeroPsicologa from '../../components/HeroPsicologa';
import HeroPacientes from '../../components/HeroPacientes';
import BlogListPaginator from '@theme/BlogListPaginator';
import {ThemeClassNames} from '@docusaurus/theme-common';

function BlogListPage(props) {
  const {metadata, items, sidebar} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  const hero = props.location.pathname.includes('psicologa')
    ? <HeroPsicologa /> : <HeroPacientes />;
  return (
    <BlogLayout
      title={title}
      description={blogDescription}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: 'blog_posts_list',
      }}
      sidebar={sidebar}>
      {hero}
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default BlogListPage;
