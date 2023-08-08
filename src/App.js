import ProfilePhoto from './components/Profile/ProfilePhoto';
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Address';
function App () {
  return (
    <div className="container">
    <ProfilePhoto />
    <FullName />
    <Address />
    </div>
    );
}

export default App;