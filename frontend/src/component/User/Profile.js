import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <section class="bg-dark vh-100" style={{backgroundColor: "#9de2ff"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card  " style={{borderRadius: "15px",width:"800px"}}>
          <div class="card-body p-4" >
            <div class="d-flex text-black" >
              <div class="flex-shrink-0">
                <img src={user.avatar.url} alt={user.name}
                  style={{width: "180px" ,borderRadius: "10px"}}/>
              </div>
              <div style={{marginLeft:"50px"}} class="flex-grow-1 ms-3">
                <h5 class="mb-1">{user.name}</h5>
                <p class="mb-2 pb-1" style={{color: "#2b2a2a"}}>{user.email}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{backgroundColor: "#efefef"}}>
                  <div>
                    <p class="small text-muted mb-1">Full Name</p>
                    <p class="mb-0">{user.name}</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Email</p>
                    <p class="mb-0">{user.email}</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Joined On</p>
                    <p class="mb-0">{String(user.createdAt).substr(0, 10)}</p>
                  </div>
                </div>
                <div class="d-flex pt-1">
                <Link to="/orders">
                  <button type="button" class="btn btn-primary me-1 flex-grow-1">My Orders</button></Link>
                  <Link to="/password/update">
                  <button type="button" class="btn btn-primary flex-grow-1">Follow</button></Link>
                  <Link to="/me/update">
                  <button type="button" class="btn btn-primary flex-grow-1">Edit Profile</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
