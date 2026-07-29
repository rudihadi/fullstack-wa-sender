import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login sukses, langsung arahkan ke /dashboard
    if (email && password) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              {/* Card Login */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="card-body">
                  {/* Header/Logo Icon */}
                  <div className="text-center mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-circle mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="bi bi-shield-lock-fill fs-3"></i>
                    </div>
                    <h4 className="fw-bold text-dark mb-1">Selamat Datang</h4>
                    <p className="text-muted small">
                      Silakan masuk ke akun Anda
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleLogin}>
                    {/* Input Email */}
                    <div className="mb-3">
                      <label className="form-label text-secondary small fw-medium">
                        Alamat Email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0 text-muted">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control bg-light border-start-0 ps-0"
                          placeholder="nama@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Input Password */}
                    <div className="mb-3">
                      <label className="form-label text-secondary small fw-medium">
                        Kata Sandi
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0 text-muted">
                          <i className="bi bi-lock"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control bg-light border-start-0 ps-0"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Opsi Tambahan */}
                    {/* <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label text-secondary small"
                          htmlFor="rememberMe"
                        >
                          Ingat saya
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-primary text-decoration-none small fw-medium"
                      >
                        Lupa Password?
                      </a>
                    </div> */}

                    {/* Tombol Masuk */}
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2 rounded-3 fw-bold bg-gradient shadow-sm"
                    >
                      Masuk
                    </button>
                  </form>

                  {/* Footer Card */}
                  {/* <div className="text-center mt-4">
                    <p className="text-muted small mb-0">
                      Belum punya akun?{" "}
                      <a
                        href="#"
                        className="text-primary text-decoration-none fw-medium"
                      >
                        Daftar sekarang
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
