import React, { Component } from "react";

export default class AppContent extends Component {

    state = {posts: []};

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    anotherFunction = () => {
        console.log("Another fn");
    }

    leftParagraph = () => {
        console.log("left the paragraph");
    }

    fetchList = () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(json => { 
                // this.state.posts = json; ==> this won't work!!
                this.setState({posts: json});

                // console.log(json); 
                // // let posts = document.getElementById("post-list");
                // const posts = this.listRef.current;

                // json.forEach(function(obj){
                //     let li = document.createElement("li");
                //     li.appendChild(document.createTextNode(obj.title));
                //     posts.appendChild(li);
                // })
            })
    }

    clickedItem = (x) => {
        console.log("clicked", x);
    }

    render() {
        return (
            <div>
                This is the content.
                <br />
                <hr />
                <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}>This is some text.</p>
                <button onClick={this.fetchList} className="btn btn-primary" href='#'>Fetch Data</button>
                <hr />

                <p>Posts is {this.state.posts.length} items long</p>
                {/* <ul id="post-list" ref={this.listRef}></ul> */}

                <ul>
                    {this.state.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Link : https://getbootstrap.com/docs/5.2/components/accordion/ 
                Components -> Accordion -> Example code copy & paste */}

                {/* 'fetchList(){ }' has no access to "this" keyword 
                but 'fetchList = () =>{}' has access */}

                {/* insteed of using "id" use "ref" as possible 
                but over use of "ref" will result in problems => do not use "ref" unless it is absolutely critical*/}

            </div>
        );
    }
}