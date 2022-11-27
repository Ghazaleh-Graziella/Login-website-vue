<template>
  <div class="bg-light mt-5">
    <MDBTabs v-model="form7ActiveTab">
      <!-- Tabs navs -->
      <MDBTabNav pills justify tabsClasses="mb-3">
        <MDBTabItem tabId="form7-login" href="form7-login">Login</MDBTabItem>
        <MDBTabItem tabId="form7-register" href="form7-register"
          >Register</MDBTabItem
        >
      </MDBTabNav>
      <!-- Tabs navs -->
      <!-- Tabs content -->
      <MDBTabContent>
        <MDBTabPane tabId="form7-login">
          <form @submit.prevent="login">
            <div class="text-center mb-3">
              <p>Sign in with:</p>
              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="facebook-f" />>
              </MDBBtn>

              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="google" />
              </MDBBtn>

              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="twitter" />
              </MDBBtn>

              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="github" />
              </MDBBtn>
            </div>

            <p class="text-center">or:</p>

            <!-- Email input -->
            <MDBInput
              type="email"
              label="Email address"
              v-model="login_form.email"
              wrapperClass="mb-4"
            />

            <!-- Password input -->
            <MDBInput
              type="password"
              label="Password"
              autocomplete
              v-model="login_form.password"
              wrapperClass="mb-4"
            />

            <!-- 2 column grid layout for inline styling -->
            <MDBRow class="mb-4">
              <MDBCol>
                <!-- Simple link -->
                <a href="#!">Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <!-- Submit button -->
            <MDBBtn color="primary" block class="mb-4" type="submit">
              Sign in
            </MDBBtn>

            <!-- Register buttons -->
            <div class="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
            </div>
          </form>
        </MDBTabPane>

        <!-- register form  -->
        <MDBTabPane tabId="form7-register">
          <form @submit.prevent="register">
            <div class="text-center mb-3">
              <p>Sign up with:</p>
              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="facebook-f" />>
              </MDBBtn>

              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="google" />
              </MDBBtn>

              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="twitter" />
              </MDBBtn>

              <MDBBtn color="primary" floating class="mx-1">
                <MDBIcon iconStyle="fab" icon="github" />
              </MDBBtn>
            </div>

            <p class="text-center">or:</p>

            <!-- Email input -->
            <MDBInput
              type="email"
              label="Email"
              v-model="register_form.email"
              wrapperClass="mb-4"
            />

            <!-- Password input -->
            <MDBInput
              type="password"
              label="Password"
              autocomplete
              v-model="register_form.password"
              wrapperClass="mb-4"
            />

            <!-- Submit button -->
            <MDBBtn color="primary" block class="mb-3" type="submit">
              Sign up
            </MDBBtn>
          </form>
        </MDBTabPane>
      </MDBTabContent>
      <!-- Tabs content -->
    </MDBTabs>
  </div>
</template>

<script>
import {
  MDBInput,
  MDBBtn,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    MDBInput,
    MDBBtn,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBCol,
    MDBRow,
    MDBIcon,
  },
  setup() {
    const form7ActiveTab = ref("form7-login");
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();
    console.log("hi");
    console.log("before", store.state);
    const login = () => {
      store.dispatch("login", login_form.value);
      console.log(store);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return {
      form7ActiveTab,
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>
