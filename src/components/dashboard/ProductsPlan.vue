<template>
  <div class="mt-md-6 mt-sm-0">

    <loading :active.sync="isLoading"></loading>
        
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        Create New Product
      </button>
    </div>

    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">Category</th>
          <th>Product</th> <!-- 沒設 width 寬度就會比較大 -->
          <th width="120">Price</th>
          <th width="120">Discount Price</th>
          <th width="100">Activated</th>
          <th width="150">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">Activated</span>
            <span v-else>Not Activated</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">Edit</button>
            <button class="btn btn-outline-primary btn-sm"
              @click="openDelProductModal(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>


    
    <!-- Modal-Product Create/Update -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>New Product</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">Image url</label>
                  <input type="text" class="form-control" id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="please enter image url">
                </div>
                <div class="form-group">
                  <label for="customFile">or Upload
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid" :src="tempProduct.imageUrl" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" id="title"
                    v-model="tempProduct.title"
                    placeholder="Please enter title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">Category</label>
                    <input type="text" class="form-control" id="category"
                      v-model="tempProduct.category"
                      placeholder="Please enter category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">Unit</label>
                    <input type="unit" class="form-control" id="unit"
                      v-model="tempProduct.unit"
                      placeholder="Please enter unit">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="origin_price">Original Price</label>
                    <input type="number" class="form-control" id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="Please enter original price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">Discount Price</label>
                    <input type="number" class="form-control" id="price"
                      v-model="tempProduct.price"
                      placeholder="Please enter discount price">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">Product Description</label>
                  <textarea type="text" class="form-control" id="description"
                    v-model="tempProduct.description"
                    placeholder="Please enter description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">Product Content</label>
                  <textarea type="text" class="form-control" id="content"
                    v-model="tempProduct.content"
                    placeholder="Please enter product content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      Activate product?
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
     </div>
     
    <!-- Modal-Product DELETE-->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>Delete Product</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you deleting <strong class="text-primary">{{ tempProduct.title }}</strong> ? (Can't recover after deleting)
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary"
              @click="delProduct">Delete</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from "../Pagination"; //載入分頁元件

export default {
  name: 'Products',
  data () { //data 會使用 function的格式
    return {
      products: [], //空陣列
      pagination: {}, //空物件
      tempProduct: {}, //空物件
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      // https://vue-course-api.hexschool.io/api/hexstore/admin/products?page=1
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;
      
      vm.isLoading = true; //加入 Loading
      this.$http.get(api).then((response) => { 
        //console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products; //把資料放入到data去
        vm.pagination = response.data.pagination; //把分頁資料放入到data去
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item); //ES6寫法，將 Item的值，寫入一個空物件。避免 tempProduct 和 Item有參考的特性
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    updateProduct() { //create新增　或　update更新
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`; //create　的API
      let httpMethod = 'post'; //create　的方法

      if (!vm.isNew) { //如果不是要”create”，"編輯"的 API 和 httpMethod 會改變
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }

      this.$http[httpMethod](api, {data: vm.tempProduct}).then((response) => { //注意送出的data 寫法，要和API裡面的一樣
        // console.log(response.data);
        if (response.data.success) {
          $('#productModal').modal('hide'); //關閉 Modal視窗
          vm.getProducts(); //再重新取得遠端的資料
        } else {
          vm.getProducts();
          console.log('新增失敗');
        }
      });
    },
    uploadFile() {
      //console.log(this);
      const uploadedFile = this.$refs.files.files[0]; //是一個陣列　先把檔案取出來
      const vm = this;
      const formData = new FormData(); //建立一個 formData物件，使用 formData　送出
      formData.append('file-to-upload', uploadedFile); //將 FormData 加入

      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        //console.log(response.data);
        vm.status.fileUploading = false;
        if (response.data.success) {
          // vm.tempProduct.imageUrl = response.data.imageUrl;
          // console.log(vm.tempProduct);
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
        } else {
          // EVENT BUS
          this.$bus.$emit('messsage:push', response.data.message, 'danger'); //來觸發外層的 AlertMessage.vue
          // // message, 訊息本身,　狀態 Bootstrap 的 class
        }
      });
    },
    openDelProductModal(item) {
      const vm = this;
      $('#delProductModal').modal('show');
      vm.tempProduct = Object.assign({}, item);
    },
    delProduct() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response, vm.tempProduct);
        $('#delProductModal').modal('hide');
        vm.isLoading = false;
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
    // this.$bus.$emit('messsage:push', '這裡是一段訊息 from Products.vue', 'success'); //來觸發外層的 AlertMessage.vue
    // // message, 訊息本身,　狀態 Bootstrap 的 class
  },
};
</script>


