import React from "react";

function term(props) {
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.description}
          </dd>
        </div>
    );
}

export default term;