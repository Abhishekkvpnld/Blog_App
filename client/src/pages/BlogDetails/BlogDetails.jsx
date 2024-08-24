import Navbar from "../../components/Navbar/navbar";
import "./blogDetails.css"
import Footer from "../../components/Footer/Footer";
import { FcLike } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <div className="blog_container">

        <div className="blog_details_div">

          <div className="blog_details_img">
            <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Img" />
          </div>

          <div className="blog_uploader_data">
            <div className="user_data">
              <img src="https://www.adobe.com/uk/products/firefly/features/media_179d807b0123090143eea74eea2d7cf4e7aa962ae.png?width=750&format=png&optimize=medium" alt="img" />
    
              <p>User Name</p>
            </div>

            <div className="blog_icons">
              <div className="blog_action_icon"> <FcLike className="icon" /><span>250</span></div>
              <div className="blog_action_icon"><FaRegCommentAlt className="icon"/><span>155</span></div>
              <div className="blog_action_icon"><IoMdShare className="icon"/><span>287</span></div>
              <p>date</p>
            </div>
          </div>

          <div className="blog_content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, sit doloribus. Vero aliquid quibusdam et molestiae vitae, pariatur, repudiandae neque dicta esse voluptates ipsa est expedita modi ducimus illum. Quisquam, dolorem cum odit harum quidem perspiciatis similique enim, temporibus repudiandae, ut aliquam. Unde consequatur distinctio laudantium sint quod voluptatum. Nostrum, excepturi doloribus? Sapiente, dolorem porro. Laboriosam facere laudantium architecto beatae perferendis molestiae asperiores ipsa adipisci natus sit hic, vero obcaecati aspernatur, eos libero veniam similique eius animi deserunt consequuntur soluta nulla tenetur ullam voluptatem. Totam, dolores minima, laboriosam magnam, iusto sed numquam facere nobis dolorem voluptatibus error! Vel id suscipit sint consectetur quidem incidunt earum, eaque vitae autem officia consequatur quae esse soluta recusandae dolore. Fugiat eius quia amet nostrum beatae molestiae sint reiciendis voluptatem dolorum magnam reprehenderit quis corrupti earum doloribus molestias deserunt modi, aut mollitia illum tempora quibusdam dolore et expedita. Aliquam dolore quod minima est ut laudantium voluptas necessitatibus, earum dolorem, consequuntur, cupiditate ea in. Non officiis nam rem ratione, adipisci voluptatibus debitis laboriosam eligendi aut porro expedita sequi, distinctio odit minus facilis consectetur culpa dolorem vel. Expedita obcaecati soluta, illum iusto tempore animi suscipit quod, placeat error omnis nam rem voluptatibus? Quo, veritatis soluta. Perferendis, at vel! Similique corporis est nobis magnam aperiam? Aut dolor asperiores sequi tempore recusandae, perspiciatis ipsam vero voluptatum esse, reprehenderit voluptatibus harum fugiat nulla modi ratione soluta! Numquam, amet fugit unde optio temporibus est repellendus quaerat ea. Magnam, nemo. Tenetur nihil cumque minima officia, quibusdam possimus eum nulla quo corporis exercitationem. Aliquam sint error praesentium sapiente dolor laudantium officia accusantium at labore fuga ratione, eos doloribus dicta magnam vero recusandae magni a, assumenda tenetur perspiciatis! Illo commodi nulla sapiente, culpa quod quisquam sequi expedita sint ab voluptatem, cupiditate labore quia cum amet ullam. Pariatur, ducimus dolorem. Quasi, ad! Quibusdam repellat doloribus vel laudantium voluptatum, illum earum. Doloremque pariatur et alias molestias explicabo sed ipsam voluptatem impedit provident. Vero illum excepturi eius odio labore a nisi possimus soluta nobis optio illo voluptas sequi reprehenderit, vitae repellat animi dolor qui eligendi obcaecati. Est aut accusantium necessitatibus voluptatum! Omnis fuga voluptas, cupiditate saepe assumenda molestiae dolorem minima ullam aperiam animi incidunt eveniet iusto modi? Modi, temporibus, odio doloremque, nemo quas fugiat blanditiis repudiandae dignissimos rerum ducimus voluptates esse iusto sed voluptatum. Est maiores dolorum suscipit tempora adipisci qui possimus accusamus nisi dolor repudiandae eveniet obcaecati rem consequuntur ut, eaque similique aspernatur! Odio ab eaque voluptatibus, sed doloribus incidunt molestias tenetur magnam laboriosam dolore consequatur quas animi ullam ea a suscipit tempore atque accusantium, quo harum laudantium voluptates. Error quae recusandae reiciendis voluptates tenetur quia fuga provident ratione aliquam? Quidem corporis laudantium, ea itaque nihil in, assumenda voluptas at, exercitationem excepturi accusantium vel! Quibusdam explicabo doloremque velit, officiis dicta alias. Sit natus facere velit autem culpa blanditiis nulla quasi labore sunt fugiat. Autem sit asperiores cum sint ipsa a provident quis fuga! Enim maxime sunt debitis vitae dolorem. Quisquam earum recusandae aliquam nemo culpa tempore excepturi alias impedit ipsam. Quas nam vitae sint dolores voluptates.</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogDetails;