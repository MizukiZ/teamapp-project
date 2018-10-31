require 'test_helper'

class RegisterControllerTest < ActionDispatch::IntegrationTest
<<<<<<< HEAD
  # test "the truth" do
  #   assert true
  # end
=======
  test "should get index" do
    get register_index_url
    assert_response :success
  end

>>>>>>> a4f6c3f523abf0b5de4af8248e69bfb5a1775519
end
