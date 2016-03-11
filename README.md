# simpleModal
Basic modal using jQuery

## Usage
Since we want the modal to show inside a specific element, the position property of the containing element needs to be set to relative.
This is how you would use the simple modal:

```javascript
var warningModal = new simpleModal({
	title: "Modal Title",
  content: "This is where you would add the modal content!",
  modalContainer: "#idofelementwherethemodalshouldappear",
  buttonConfig: "OK,CANCEL",
  cancel: function(modal) {
  	modal.hide();
  },
  ok: function(modal) {
  	console.log('continue with the report...');
  }
});
```
