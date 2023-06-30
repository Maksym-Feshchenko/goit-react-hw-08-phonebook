import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/dataUser/userSelect';
import { logoutThunk } from 'redux/dataUser/userThunk';

const InfoUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      {user && (
        <div className=" d-flex gap=10">
          <h4 className="text-light">  👾 Welcome, {user.name}</h4>
          <Button
            bg="black"
            variant="dark"
            className="d-flex "
            onClick={handleSubmit}
          >
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfoUser;