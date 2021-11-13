import React from "react";
import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import CardUser from "../components/Cards.jsx/CardUser";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const TeacherProfile = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="mt-10 mb-10">
            <ActionCardUser
              type="FULL"
              subject="Asignatura"
              school="Centro educativo"
              teacherName="Nombre del profesor"
              img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TeacherProfile;
