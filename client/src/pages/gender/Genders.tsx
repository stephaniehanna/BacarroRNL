import AddGenderForm from "../../components/forms/AddGenderForm";
import GendersTable from "../../components/tables/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const content = (
    <>
      <div className="row">
        <div className="col-md-3">
          <AddGenderForm />
        </div>
        <div className="col-md-9">
          <GendersTable />
        </div>
      </div>
    </>
  );

  return <MainLayout content={content} />;
};

export default Genders;
