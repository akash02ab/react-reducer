import "./style.css";
import { useContext } from "react";
import CounterContext from "../../contexts/CounterStore";

const Content = () => {
    const { counterState, dispatch } = useContext(CounterContext);
    
    return (
        <div className="content">
            <h1>Content</h1>
            <div className="incr-decr">
                <button onClick={() => dispatch("decrement")}>-</button>
                <span>{counterState.counterValue}</span>
                <button onClick={() => dispatch("increment")}>+</button>
                <button onClick={() => dispatch("reset")}>X</button>
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae aperiam, accusamus quia, ullam ipsam, tempora voluptates quasi tempore earum maiores deleniti consequatur accusantium. Eveniet perspiciatis quia aperiam perferendis unde.
            Magni expedita sit necessitatibus consectetur asperiores corrupti error, ab assumenda quia accusantium consequuntur deleniti veniam ipsam modi, officia nobis ea labore itaque omnis nihil facere. Ullam quos labore qui minima.
            Veritatis sequi sint dicta. Quae similique consectetur quam asperiores. Ut nobis sapiente exercitationem provident tempora minus, at numquam ipsum dolores, itaque fugiat fuga, ipsa aliquid saepe sunt blanditiis autem excepturi.
            Rem ipsum, numquam perferendis ad commodi quas ea, vel sequi est libero fuga provident aliquid magni hic ab earum reprehenderit assumenda dignissimos porro ducimus nihil eaque! Quisquam dolorum qui minima.
            Possimus, accusamus cupiditate! Modi magni distinctio ea, mollitia incidunt ducimus fuga maiores excepturi quis est vel porro. Alias distinctio, itaque magnam officiis quo fugiat dolore nihil enim a, culpa delectus.
            Distinctio voluptas mollitia est, ducimus nemo consectetur culpa quasi vel, unde, omnis dolorem dolores? Eius inventore minima neque numquam reprehenderit tempore architecto error delectus sint eveniet debitis impedit, voluptatem perferendis.
            Nam corporis quam illo deleniti saepe? Sit aperiam sunt tempore atque perferendis? Ab, sed ipsum? Illo, fugiat a? Modi, consectetur in! Ut commodi labore itaque aliquam officia a inventore ipsa!
            Dolor voluptatibus, sint doloribus maiores architecto nemo, voluptatum esse sed libero est aut alias neque recusandae nulla labore eius iusto corporis iste cumque quam consequuntur, nam quos. Ipsam, dolore nostrum?
            Alias aperiam veniam assumenda velit, unde, ullam ea sed provident quisquam debitis similique perferendis! A, assumenda. Quisquam quo sapiente repellendus itaque aliquam. Provident facere autem recusandae soluta quibusdam libero modi!
            Sapiente voluptatem praesentium libero tempore eos doloribus facilis dolore? Odio accusamus adipisci, doloremque quibusdam voluptatibus cupiditate quisquam maxime ea praesentium suscipit culpa id! Quas delectus modi cum incidunt quasi sunt.</p>
        </div>
    );
};

export default Content;
