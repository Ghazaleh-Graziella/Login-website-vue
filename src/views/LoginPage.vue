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
              id="form7LoginEmail"
              v-model="form7Login.email"
              wrapperClass="mb-4"
            />

            <!-- Password input -->
            <MDBInput
              type="password"
              label="Password"
              autocomplete
              id="form7LoginPassword"
              v-model="form7Login.password"
              wrapperClass="mb-4"
            />

            <!-- 2 column grid layout for inline styling -->
            <MDBRow class="mb-4">
              <MDBCol class="d-flex justify-content-center">
                <!-- Checkbox -->
                <MDBCheckbox
                  label="Remember me"
                  id="form7LoginCheck"
                  v-model="form7Login.check"
                  wrapperClass="mb-3 mb-md-0"
                />
              </MDBCol>

              <MDBCol>
                <!-- Simple link -->
                <a href="#!">Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <!-- Submit button -->
            <MDBBtn color="primary" block class="mb-4"> Sign in </MDBBtn>

            <!-- Register buttons -->
            <div class="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
            </div>
          </form>
        </MDBTabPane>
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

            <!-- Name input -->
            <MDBInput
              type="text"
              label="Name"
              id="form7RegisterName"
              v-model="form7Register.name"
              wrapperClass="mb-4"
            />

            <!-- Username input -->
            <MDBInput
              type="text"
              label="Username"
              id="form7RegisterUsername"
              v-model="form7Register.username"
              wrapperClass="mb-4"
            />

            <!-- Email input -->
            <MDBInput
              type="email"
              label="Email"
              id="form7RegisterEmail"
              v-model="form7Register.email"
              wrapperClass="mb-4"
            />

            <!-- Password input -->
            <MDBInput
              type="password"
              label="Password"
              autocomplete
              id="form7RegisterPassword"
              v-model="form7Register.password"
              wrapperClass="mb-4"
            />

            <!-- Repeat Password input -->
            <MDBInput
              type="password"
              label="Repeat password"
              autocomplete
              id="form7RegisterPasswordRepeat"
              v-model="form7Register.passwordRepeat"
              wrapperClass="mb-4"
            />

            <!-- Checkbox -->
            <!-- <MDBCheckbox
              label="I have read and agree to the terms"
              id="form7RegsiterTermsCheck"
              v-model="form7Regsiter.termsCheck"
              wrapperClass="d-flex justify-content-center mb-4"
            /> -->

            <!-- Submit button -->
            <MDBBtn color="primary" block class="mb-3"> Sign in </MDBBtn>
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
  MDBCheckbox,
  // MDBTextarea,
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
    MDBCheckbox,
    // MDBTextarea,
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
    const form7Login = ref("");
    const form7Register = ref("");
    const store = useStore();

    const login = () => {
      store.dispatch("login", form7Login.value);
    };

    const register = () => {
      store.dispatch("register", form7Register.value);
    };
    return {
      form7ActiveTab,
      form7Login,
      form7Register,
      login,
      register,
    };
  },
};
</script>
