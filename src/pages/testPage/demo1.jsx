import React from "react";
import styles from "./demo1.scss";

function debounce(fn, ms) {
  let timer;
  console.log(arguments);
  return function(...args) {
    console.log(args);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, ms);
  };
}

export default class Demo1 extends React.Component {
  test = str => {
    console.log(`${str}`);
  };

  test2 = debounce(this.test, 1000);

  render() {
    return (
      <div className={styles.container}>
        <span onClick={() => this.test("llllkhhddgd")}>hahahaha</span>
        <br />
        <span onClick={() => this.test2("hdhgdgggdg")}>hahahaha</span>
      </div>
    );
  }
}
