class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        HashMap<String, List<String>> map = new HashMap<String, List<String>>();
        
        for(int i=0;i<strs.length;i++){
            char local[] = strs[i].toCharArray();
            Arrays.sort(local);
            String localStr = String.valueOf(local);
            
            if(map.get(localStr) == null){
                List<String> lst = new ArrayList<String>();
                lst.add(strs[i]);
                map.put(localStr, lst);
            }else{
                List<String> lst = map.get(localStr);
                lst.add(strs[i]);
                map.put(localStr, lst);
            }
        }
        List<List<String>> output = new ArrayList<List<String>>(map.values());
        return output;
    }
}