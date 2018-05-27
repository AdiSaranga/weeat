require 'rails_helper'

RSpec.describe "cuisines/show", type: :view do
  before(:each) do
    @cuisine = assign(:cuisine, Cuisine.create!(
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
