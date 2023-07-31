import { Navigation } from '../components/navigation';

export default function Home() {
    return (
        <>
          <Navigation isFullscreen={isFullscreen} />
          <Text>Hi</Text>
        </>
      );
}