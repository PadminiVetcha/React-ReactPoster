import { useState } from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </main>
  );
}

export default App;
