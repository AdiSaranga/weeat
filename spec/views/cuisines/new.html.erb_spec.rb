require 'rails_helper'

RSpec.describe "cuisines/new", type: :view do
  before(:each) do
    assign(:cuisine, Cuisine.new(
      :name => "MyString"
    ))
  end

  it "renders new cuisine form" do
    render

    assert_select "form[action=?][method=?]", cuisines_path, "post" do

      assert_select "input[name=?]", "cuisine[name]"
    end
  end
end
