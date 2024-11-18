import React, { useState, useContext } from "react";
import { auth, AuthContext } from "../Context API/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);  // Get the current user
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Update profile using Firebase auth method
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser({ ...user, displayName, photoURL });  // Update context with new details
        setLoading(false);
        alert("Profile updated successfully!");
        navigate('/my-profile')
      })
      .catch((err) => {
        setLoading(false);
        setError("Error updating profile: " + err.message);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Update Profile</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Display Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            disabled
          />
        </div>

        {/* Profile Picture URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Profile Picture URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter image URL"
          />
          {photoURL && (
            <div className="mt-2">
              <img
                src={photoURL}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
