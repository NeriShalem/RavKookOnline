import SideBarContents from "./SideBarContents";
import SideBarLeft from "./SideBarLeft";

const BookPage = ()=> {
    return (
      <div className="BookPage">
        <SideBarLeft/>
        <p>book page</p>
        <SideBarContents/>
        
      </div>
    );
  }
  
export default BookPage;
  