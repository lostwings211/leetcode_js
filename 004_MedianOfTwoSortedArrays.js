/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var combined = [];
    var i = 0;
    var j = 0;
    var k = 0;
    var ret = 0;
    while(i < nums1.length || j < nums2.length) {
        if(i < nums1.length && j < nums2.length) {
            if(nums1[i] <= nums2[j]) {
                combined[k++] =  nums1[i++];
            }
            else {
                combined[k++] =  nums2[j++];
            }
        }
        else if (i < nums1.length) {
            combined[k++] =  nums1[i++];
        }
        else {
            combined[k++] =  nums2[j++];
        }
    }
    if(k > 0) {
        if (k % 2 == 1) {
            ret = combined[Math.floor(k / 2)];
        }
        else {
            ret = (combined[Math.floor(k / 2)] + combined[Math.floor(k / 2) - 1]) / 2;
        }
    }
    return ret;
};