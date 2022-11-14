/* RESULTADO PESQUISA */
import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';
import ProfileInfoLoader from './ProfileInfoLoader';
import AvatarInfoLoader from './AvatarInfoLoader';

type FormData = {
  usuario: string;
};
type Profile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const ProfileResult = () => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="profile-search-container">
      <div className="container search-container">
        <h1 className="title-color">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {profile && (
        <>
          <div>
            <div className="container-result-card container">
              {' '}
              {isLoading ? (
                <AvatarInfoLoader />
              ) : (
                <div className="container-avatar">
                  <ResultCard title="" description="">
                    <img
                      src={profile.avatar_url}
                      alt="profile"
                      className="avatar"
                    />
                  </ResultCard>
                </div>
              )}
              <div className="container-information">
                {isLoading ? (
                  <ProfileInfoLoader />
                ) : (
                  <div >
                    <h6>Informações</h6>
                    <ResultCard title="Perfil: " description={profile.url} />
                    <ResultCard
                      title="Seguidores: "
                      description={profile.followers}
                    />
                    <ResultCard
                      title="Localidade: "
                      description={profile.location}
                    />
                    <ResultCard title="Nome: " description={profile.name} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileResult;
