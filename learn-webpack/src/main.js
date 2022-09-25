import count from "./js/count";
import sum from "./js/sum";
import "./css/index.css";
import "./sass/index.scss";
import "./sass/index.sass";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
document.getElementById("btn").onclick = function () {
    // 动态导入 --> 实现按需加载
    // 即使只被引用了一次，也会代码分割
    import(/* webpackChunkName: "math" */ "./js/math.js").then((sum) => {
        console.log("sum: ", sum);
    });
};
