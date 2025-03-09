from django.urls import path
from .views import (
    product_list, product_detail,
    cart_list, cart_detail,
    wishlist_list, wishlist_detail,
    review_list, review_detail
)

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/<int:pk>/', product_detail, name='product-detail'),

    path('cart/', cart_list, name='cart-list'),
    path('cart/<int:pk>/', cart_detail, name='cart-detail'),

    path('wishlist/', wishlist_list, name='wishlist-list'),
    path('wishlist/<int:pk>/', wishlist_detail, name='wishlist-detail'),

    path('reviews/', review_list, name='review-list'),
    path('reviews/<int:pk>/', review_detail, name='review-detail'),
]
