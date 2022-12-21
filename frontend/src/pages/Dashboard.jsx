import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      console.log(`No User`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);

  return (
    <section className="dashboard">
      <section className="dashboard-body">
        <h1>Welcome {user && user.name} </h1>
        <p>User Information</p>
        <Outlet />
      </section>
    </section>
  );
}

export default Dashboard;
