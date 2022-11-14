import ContentLoader from 'react-content-loader';

const ProfileInfoLoader = () => (
  <ContentLoader
    speed={3}
    width={800}
    height={250}
    viewBox="0 0 800 250"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
  >
    <rect x="50" y="6" rx="4" ry="4" width="500" height="38" />
    <rect x="50" y="55" rx="4" ry="4" width="500" height="38" />
    <rect x="50" y="104" rx="4" ry="4" width="500" height="38" />
    <rect x="50" y="153" rx="4" ry="4" width="500" height="38" />
  </ContentLoader>
);

export default ProfileInfoLoader;

ProfileInfoLoader.metadata = {
  name: 'Abraham Calsin',
  github: 'abrahamcalsin',
  description: 'Loading a list of tasks.',
  filename: 'TaskList',
};
