
import faker from "faker";
import Commentdetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
function App() {
  return (
    <div class="ui container comments">
      <ApprovalCard>
        <h1>warning!</h1>
        <p>are you sure to delete this?</p>
      </ApprovalCard>
      <ApprovalCard>
        <Commentdetail
          auther="zahra"
          timeAgo=" Today at 3:42 PM "
          comment="really good post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Commentdetail
          auther="fateme"
          timeAgo=" Today at 5:02 PM "
          comment="fantastic data u shared thank u"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}
export default App;
