// 定义一个数组，存储所有教程的标题和链接
const tutorials = [
    { title: "HTML基础教程", link: "html-tutorial.html" },
    { title: "CSS基础教程", link: "css-tutorial.html" },
    { title: "JavaScript基础教程", link: "js-tutorial.html" },
    { title: "苹果美国区账号注册方法教程", link: "apple-id-tutorial.html" } // 新增教程
];

// 获取教程目录的容器
const tutorialList = document.getElementById("tutorial-list");

// 遍历教程数组并创建列表项
tutorials.forEach(tutorial => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = tutorial.link;
    link.textContent = tutorial.title;
    listItem.appendChild(link);
    tutorialList.appendChild(listItem);
});
