import React from "react";
import Rating from "@mui/material/Rating";
import { useForm, Controller } from "react-hook-form";
import { useAddProductMutation } from "../../api/productApi";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      productDes: "",
      productCat: "",
      productSubCat: "",
      productPrice: "",
      productOldPrice: "",
      productFeatured: "",
      productBrand: "",
      productStock: "",
      productDiscount: "",
      productSize: "",
      productRating: 0,
      media: [],
    },
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setValue("media", files, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("productDes", data.productDes);
      formData.append("productCat", data.productCat);
      formData.append("productSubCat", data.productSubCat);
      formData.append("productPrice", data.productPrice);
      formData.append("productOldPrice", data.productOldPrice);
      formData.append("productFeatured", data.productFeatured);
      formData.append("productBrand", data.productBrand);
      formData.append("productStock", data.productStock);
      formData.append("productDiscount", data.productDiscount);
      formData.append("productSize", data.productSize);
      formData.append("productRating", data.productRating);

      if (data.media.length > 0) {
        data.media.forEach((file) => formData.append("media", file));
      }

      await addProduct(formData).unwrap();
      alert("✅ Product added successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className="container py-3 bg-white add-product-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col">
            <label>Product Name</label>
            <input
              type="text"
              {...register("productName", { required: "Product name is required" })}
              className="form-control"
            />
            {errors.productName && <p className="text-danger">{errors.productName.message}</p>}

            <label className="mt-2">Product Description</label>
            <textarea {...register("productDes")} className="form-control" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-3">
            <label>Category</label>
            <input type="text" {...register("productCat")} className="form-control" />
          </div>
          <div className="col-3">
            <label>Sub Category</label>
            <input type="text" {...register("productSubCat")} className="form-control" />
          </div>
          <div className="col-3">
            <label>Price</label>
            <input type="number" {...register("productPrice")} className="form-control" />
          </div>
          <div className="col-3">
            <label>Old Price</label>
            <input type="number" {...register("productOldPrice")} className="form-control" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-3">
            <label>Is Featured</label>
            <select {...register("productFeatured")} className="form-select">
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-3">
            <label>Brand</label>
            <input type="text" {...register("productBrand")} className="form-control" />
          </div>
          <div className="col-3">
            <label>Stock</label>
            <input type="number" {...register("productStock")} className="form-control" />
          </div>
          <div className="col-3">
            <label>Discount (%)</label>
            <input type="number" {...register("productDiscount")} className="form-control" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row mb-3">
          <div className="col-3">
            <label>Size</label>
            <select {...register("productSize")} className="form-select">
              <option value="">-- Select --</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="col-3">
            <label>Rating</label>
            <Controller
              name="productRating"
              control={control}
              render={({ field }) => (
                <Rating {...field} value={field.value || 0} onChange={(_, value) => field.onChange(value)} />
              )}
            />
          </div>
        </div>

        {/* Media Upload */}
        <div className="row mb-3">
          <div className="col-6">
            <label>Media & Images</label>
            <input type="file" multiple onChange={handleFileChange} className="form-control" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-end">
            <button type="submit" className="btn btn-primary">Save Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
