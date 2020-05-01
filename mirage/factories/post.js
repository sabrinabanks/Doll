import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title: 'Blog Title',
  author: 'Anne Onymouse',
  content: "Ut excepteur quis ea elit exercitation et esse eu proident aute. Pariatur incididunt dolore cillum dolore officia deserunt ad culpa Lorem. Adipisicing veniam est ullamco ut labore in veniam dolore aliqua. Tempor veniam exercitation veniam esse adipisicing in consequat Lorem proident tempor nisi exercitation excepteur excepteur. Incididunt ex laborum adipisicing laboris ea. Nulla pariatur deserunt anim voluptate amet. Elit esse do excepteur ea eu officia qui minim cillum aliqua enim fugiat et. Ad occaecat nulla ex dolor sint. Do magna irure reprehenderit aute sunt eiusmod proident. Aliquip enim mollit et exercitation est officia. In est eiusmod minim voluptate ullamco sit ut labore nulla ipsum laboris aute sunt fugiat. Ex veniam eiusmod dolore cupidatat proident. Magna aliqua sint amet consectetur nisi cillum veniam ut esse qui reprehenderit deserunt. Consequat in aute veniam amet minim voluptate cillum eu velit incididunt eiusmod anim qui. Deserunt non aute aliquip consectetur eu magna aliquip ea fugiat qui minim adipisicing. Laboris eu occaecat est sit veniam. Ad fugiat cillum ad reprehenderit nostrud amet mollit est cupidatat quis velit dolor et enim. In dolor reprehenderit ad ullamco incididunt. In tempor reprehenderit amet sint anim eu eu id non occaecat incididunt occaecat. Fugiat magna commodo amet fugiat enim incididunt qui dolor nostrud officia excepteur. Occaecat ad minim adipisicing sint non esse anim do anim nostrud. Est proident sit voluptate tempor laborum reprehenderit. Incididunt voluptate aliqua eiusmod qui voluptate exercitation dolore aliqua anim sunt elit nisi. Amet mollit commodo cillum ut voluptate commodo aliquip nisi irure. Dolor aute pariatur reprehenderit eiusmod labore duis.",
  date() {
    let today = new Date
    return today.toDateString()
  },
  category: 'Technology'
});
