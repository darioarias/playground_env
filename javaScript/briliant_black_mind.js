/**
We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order, and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
user5 = ["a"]
user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]

Sample output:

findContiguousHistory(user0, user1) => ["/pink", "/register", "/orange"]
findContiguousHistory(user0, user2) => [] (empty)
findContiguousHistory(user0, user0) => ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
findContiguousHistory(user2, user1) => ["a"] 
findContiguousHistory(user5, user2) => ["a"]
findContiguousHistory(user3, user4) => ["/plum", "/blue", "/tan", "/red"]
findContiguousHistory(user4, user3) => ["/plum", "/blue", "/tan", "/red"]
findContiguousHistory(user3, user6) => ["/tan", "/red", "/amber"]

n: length of the first user's browsing history
m: length of the second user's browsing history
 */

"use strict";

const user0 = [
  "/start",
  "/green",
  "/blue",
  "/pink",
  "/register",
  "/orange",
  "/one/two",
];
const user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
const user2 = ["a", "/one", "/two"];
const user3 = [
  "/pink",
  "/orange",
  "/yellow",
  "/plum",
  "/blue",
  "/tan",
  "/red",
  "/amber",
  "/HotRodPink",
  "/CornflowerBlue",
  "/LightGoldenRodYellow",
  "/BritishRacingGreen",
];
const user4 = [
  "/pink",
  "/orange",
  "/amber",
  "/BritishRacingGreen",
  "/plum",
  "/blue",
  "/tan",
  "/red",
  "/lavender",
  "/HotRodPink",
  "/CornflowerBlue",
  "/LightGoldenRodYellow",
];
const user5 = ["a"];
const user6 = [
  "/pink",
  "/orange",
  "/six",
  "/plum",
  "/seven",
  "/tan",
  "/red",
  "/amber",
];

const findContiguousHistory = (user0, user1) => {
  // user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
  // user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]

  let indexies = [-Infinity, Infinity];
  for (let i = 0; i < user0.length; i++) {
    i = explore_history(user0, user1, i, indexies);
  }
};

const calculateClicksByDomain = (counts) => {
  const hash = {}; // space: O(N)

  for (let count of counts) {
    // O(N)
    const [clicks, url] = count.split(","); // O(N)
    const subdomain = url.split("."); //

    while (subdomain.length > 0) {
      let sub_do = subdomain.join(".");
      if (!(sub_do in hash)) hash[sub_do] = 0;
      hash[sub_do] += parseInt(clicks, 10);
      subdomain.shift(); // O(N)
    }
  } // O(N )

  return hash;
};

const url_clicks = (url_counts) => {
  let hash = {};
  for (let urlCount of url_counts) {
    let [clicks, url] = urlCount.split(",");
    if (!(url in hash)) hash[url] = 0;
    hash[url] += parseInt(clicks, 10);
  }

  return hash;
};

// console.log(url_clicks(url_counts))

const get_int = (str) => {
  let number = "";

  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str[i], 10);
    if (isNaN(num)) break;
    number += str[i];
  }

  return number;
}; // O(1)

const sum_clicks = (counts) => {
  let sum = 0;
  for (let clicks of counts) {
    let count = get_int(clicks);
    sum += parseInt(count, 10);
  } // O(N)

  return sum;
};
