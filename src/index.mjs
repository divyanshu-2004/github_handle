
var arr = ["divyanshu-2004"];

document.getElementById("search").onclick = async function () {
  if (document.getElementById("input1").value == "") {
    alert("Plz Enter Your Github Handle");
  } else if (
    arr.some(function (x) {
      return x == document.getElementById("input1").value;
    })
  ) {
    alert("Github Handle Already Exist");
  } else {
    var handle = document.getElementById("input1").value;
    arr.push(handle);
    const mainurl = "https://api.github.com/users/" + handle;
    try {
      const response = await fetch(mainurl);
      const details = await response.json();
      var bio = details.bio;
      if (bio == null) {
        bio = "No bio available";
      }
      document.getElementById("collection").innerHTML +=
        `
  <div class="card">
  <div class="avtar">
    <img src="` +
        `${details.avatar_url}` +
        `">
    <div class="names">
      <p class="name">${details.name}</p>
      <p class="uname">@${details.login}</p>
    </div>
  </div>
  <div class="detail">
    <div class="repos row">
      <p id="no_of_repo">${details.public_repos}</p>
      <p>REPOS</p>
    </div>
    <div class="gist row">
      <p id="no_of_gist">${details.public_gists}</p>
      <p>GISTS</p>
    </div>
    <div class="followers">
      <p id="no_of_followers">${details.followers}</p>
      <p>FOLLOWERS</p>
    </div>
  </div>
  <div class="bio">
    <p id="ubio">` +
        bio +
        `</p>
  </div>
</div>
  
  `;
    } catch (error) {
      console.error("Error in fetching");
      alert("Github Handle doesn't found");
    }
  }
};
