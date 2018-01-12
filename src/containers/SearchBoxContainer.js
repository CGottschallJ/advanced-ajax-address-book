import {connect} from "react-redux";
import SearchBox from "../components/SearchBox.js";
import {setSearchText} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    setSearchText:function(txt){
      dispatch(setSearchText(txt));
    }
  }
}
export default connect(null,mapDispatchToProps)(SearchBox);
