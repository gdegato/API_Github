import ContentLoader from 'react-content-loader';

const AvatarInfoLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="60" rx="2" ry="2" width="250" height="250" /> 
  </ContentLoader>
);

export default AvatarInfoLoader;
