const generateListItem = (item) => {
    return `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

$(document).on("submit", "#js-shopping-list-form", e => {
  e.preventDefault();
  const shoppingItemName = $("#shopping-list-entry").val();
  $(".validation-msg").text("");
  if (!shoppingItemName) {
    $(".validation-msg")
      .text("Add item name")
      .css("color", "red");
  } else {
    const html = generateListItem(shoppingItemName);
    $(".shopping-list").append(html);
    $("#shopping-list-entry").val("");
  }
});

$(document).on("click", ".shopping-item-toggle", e => {
    let currentText = $(e.target).text();
    currentText === "check" ? $(e.target).text("uncheck") : $(e.target).text("check");
    $(e.target)
        .closest("li")
        .find(".shopping-item")
        .toggleClass("shopping-item__checked");
});

$(document).on("click", ".shopping-item-delete", e => {
  $(e.target)
    .closest("li")
    .remove();
});