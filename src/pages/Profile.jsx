import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  const [profile, setProfile] = useState({
    username: 'johndoe',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    bio: 'Développeur passionné par les nouvelles technologies',
    address: '123 Rue Principale, Paris, France',
    avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
  });

  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez ajouter une logique pour sauvegarder les données
    console.log('Profile updated:', profile);
    setEditMode(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow">
            <div className="card-header bg-white">
              <h2 className="text-center mb-0">Profil Utilisateur</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  {/* Colonne photo de profil */}
                  <div className="col-md-4">
                    <div className="text-center mb-4">
                      <div className="position-relative d-inline-block">
                        <img
                          src={profile.avatar}
                          alt="Avatar"
                          className="rounded-circle img-thumbnail"
                          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        {editMode && (
                          <>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle"
                              onClick={triggerFileInput}
                              style={{ width: '40px', height: '40px' }}
                            >
                              <i className="bi bi-camera"></i>
                            </button>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleAvatarChange}
                              accept="image/*"
                              className="d-none"
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="username" className="form-label fw-bold">Nom d'utilisateur</label>
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={profile.username}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext">{profile.username}</p>
                      )}
                    </div>
                  </div>

                  {/* Colonne informations */}
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label fw-bold">Nom complet</label>
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                          value={profile.fullName}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext">{profile.fullName}</p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">Email</label>
                      {editMode ? (
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={profile.email}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext">{profile.email}</p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fw-bold">Téléphone</label>
                      {editMode ? (
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={profile.phone}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext">{profile.phone}</p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label fw-bold">Bio</label>
                      {editMode ? (
                        <textarea
                          className="form-control"
                          id="bio"
                          name="bio"
                          rows="3"
                          value={profile.bio}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext">{profile.bio}</p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label fw-bold">Adresse</label>
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={profile.address}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext">{profile.address}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer bg-white">
                <div className="d-flex justify-content-end gap-2">
                  {editMode ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setEditMode(false)}
                      >
                        Annuler
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Enregistrer
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setEditMode(true)}
                    >
                      Modifier le profil
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;