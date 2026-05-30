import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../auth0/Login';
import LogoutButton from '../auth0/Logout';
import avatar from '../../assets/images/nitch-logo.jpg';
import './auth-login.scss';

export class AuthLogin extends React.Component {
  render() {
    return <AuthLoginInner />;
  }
}

// Inner functional component so we can use hooks
const AuthLoginInner = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="AuthLogin">
      <div className="AuthLogin-profile">
        <img src={avatar} className="AuthLogin-avatar" alt="Kullapat" />
        <div className="AuthLogin-name">ᴋᴜʟʟᴀᴘᴀᴛ ᴛʜᴇᴇʀᴀ-ᴀɴɢᴋᴀɴᴀɴᴏɴ</div>
        <hr className="AuthLogin-bar" />
        <span className="AuthLogin-tagline">&lt;𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓/&gt;</span>
        <hr className="AuthLogin-bar" />
      </div>

      <nav className="AuthLogin-menu">
        {isAuthenticated
          ? <LogoutButton />
          : (
            <>
              <LoginButton />
              <span className="AuthLogin-menu-hint">← Login to see more features</span>
            </>
          )
        }
      </nav>
    </div>
  );
};
