export default {
  state: {
    book: {
      title: false,
      description: false,
    }
  },

  imgChange: function(e) {
    var _this = this;
    var input = e.target;
    var reader = new FileReader();


    reader.onloadend = function(){
      var dataURL = reader.result;

      _this.setState({imgData: dataURL});
    };
    // reader.readAsArrayBuffer(input.files[0]);
    reader.readAsDataURL(input.files[0]);
  },
  updateImg: function() {
    console.log('----------', this.state.imgData);
    this.api.postImg({data: this.state.imgData});
  },

  convertBase64UrlToBlob:  function(urlData, filetype){
    //去掉url的头，并转换为byte
    var bytes = window.atob(urlData.split(',')[1]);

    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    var i;
    for (i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }

    return new Blob([ab], {type : filetype});
  },

  imgChange2: function(e) {
    var _this = this;
    var files = e.target.files[0];
    var reader = new FileReader();
    var filename = files.name || '';
    var fileType = files.type || '';

    reader.onload = function(e){
      var base64 = e.target.result;
      var formData = new FormData();

      formData.append("upload_file", _this.convertBase64UrlToBlob(base64, fileType), filename);

      _this.setState({formData: formData});
    };
    reader.readAsDataURL(files);
  },
  updateImg2: function() {
    console.log('----------', this.state.formData.get('upload_file'));
    this.api.postImg2(this.state.formData);
  }

};
