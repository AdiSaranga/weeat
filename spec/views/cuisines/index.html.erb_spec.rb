require 'rails_helper'

RSpec.describe "cuisines/index", type: :view do
  before(:each) do
    assign(:cuisines, [
      Cuisine.create!(
        :name => "Name"
      ),
      Cuisine.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of cuisines" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
